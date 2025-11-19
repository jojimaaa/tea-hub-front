import { UserDTO, ForumTopicDTO, ForumPostDTO, ForumCommentDTO } from '@/interfaces/ForumSchemas';
import { v4 as uuidv4 } from 'uuid';

// ===== FUNÇÃO GERADORA DE MOCK =====

export const generateMockData = () => {
  // ===== USERS =====
  const users: UserDTO[] = [
    {
      name: "Alice Souza",
      username: "alice_souza",
    },
    {
      name: "Bruno Lima",
      username: "bruno_lima",
    },
    {
      name: "Carla Mendes",
      username: "carla_mendes",
    },
    {
      name: "Teste",
      username: "teste",
    },
  ];

  // ===== TOPICS =====
  const topics: ForumTopicDTO[] = [
    { id: "t1", name: "JavaScript" },
    { id: "t2", name: "Banco de Dados" },
    { id: "t3", name: "DevOps" },
  ];

  // ===== POSTS (Sem os comentários ainda) =====
  // (Usando os corpos de Markdown da nossa conversa anterior)
  type PostData = Omit<ForumPostDTO, 'comments'>;
  
  const postsData: PostData[] = [
    {
        id: 'p1',
        title: 'Entendendo Promises e Async/Await',
        body: "A adolescência é uma fase de grandes mudanças para qualquer pessoa — e, no TEA, ela vem acompanhada de **novos desafios sociais e emocionais**.\n\nQuestões que costumam aparecer:\n\n- Maior consciência das diferenças em relação aos colegas.\n- Interesse por amizades e relacionamentos, mas dificuldade em entender regras sociais.\n- Aumento da ansiedade e, às vezes, sintomas depressivos.\n\nComo apoiar o adolescente autista:\n\n- Manter canais de diálogo abertos, respeitando seu tempo.\n- Buscar profissionais que tenham experiência com TEA na adolescência.\n- Incentivar grupos e atividades em que ele possa se sentir pertencente.\n\n> Com apoio adequado, a adolescência também pode ser um período de **autoconhecimento e fortalecimento da identidade**.",
        topic: topics[0],
        user: users[3],
        created_at: new Date(Date.now() - 1000 * 60 * 5),
        likeCount: 5,
        likedByMe: false
    },
    {
        id: 'p2',
        title: 'Como normalizar um banco de dados relacional',
        body: `
    ## Normalização de Banco de Dados
    Normalizar um banco de dados é um processo para reduzir a redundância.
    > "A normalização é a chave..."
    ### As Formas Normais
    - **1FN (Primeira Forma Normal):** Cada coluna deve conter valores atômicos.
    - **2FN (Segunda Forma Normal):** Deve estar em 1FN e...
    - **3FN (Terceira Forma Normal):** Deve estar em 2FN e...
        `,
        topic: topics[1],
        user: users[1],
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 2),
        likeCount: 2,
        likedByMe: false
    },
    {
        id: 'p3',
        title: 'Docker vs Kubernetes: diferenças e aplicações',
        body: `
    Muitas pessoas confundem Docker e Kubernetes (K8s).
    * **Docker:** É uma plataforma de *containerização*.
    * **Kubernetes:** É um *orquestrador* de containers.
    Você não escolhe *entre* eles; você os usa *juntos*.
        `,
        topic: topics[2],
        user: users[2],
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 24),
        likeCount: 1,
        likedByMe: false
    },
  ];

  // ===== COMMENTS (Lista Plana) =====
  const commentsData: ForumCommentDTO[] = [
    // --- Comentários para o Post 1 (p1) ---
    {
        id: "c1",
        body: "Excelente explicação! Me ajudou muito.",
        user: users[1], // Bruno
        post_id: postsData[0].id, // p1
        parent_id: undefined,
        created_at: new Date(Date.now() - 1000 * 60 * 4),
        likeCount: 7,
        likedByMe: true
    },
    {
        id: "c2",
        body: "Tem algum exemplo prático com async/await e `fetch`?",
        user: users[2], // Carla
        post_id: postsData[0].id, // p1
        parent_id: undefined,
        created_at: new Date(Date.now() - 1000 * 60 * 3),
        likeCount: 3,
        likedByMe: false
    },
    // Resposta para c2
    {
        id: "c3",
        body: "Boa pergunta! Seria algo assim...",
        user: users[0], // Alice
        post_id: postsData[0].id, // p1
        parent_id: "c2", // <-- RESPOSTA (Nested)
        created_at: new Date(Date.now() - 1000 * 60 * 2),
        likeCount: 9,
        likedByMe: true
    },
    // Resposta para c3 (Nível 3)
    {
        id: "c4",
        body: "Obrigado, Alice! E para tratar erros, eu usaria um try/catch?",
        user: users[2], // Carla
        post_id: postsData[0].id, // p1
        parent_id: "c3", // <-- RESPOSTA (Nested Nível 3)
        created_at: new Date(Date.now() - 1000 * 60 * 1),
        likeCount: 1,
        likedByMe: false
    },
    // --- Comentários para o Post 2 (p2) ---
    {
        id: "c5",
        body: "Gostei da explicação sobre 3FN! Sempre confundo.",
        user: users[0], // Alice
        post_id: postsData[1].id, // p2
        parent_id: undefined,
        created_at: new Date(Date.now() - 1000 * 60 * 30),
        likeCount: 5,
        likedByMe: false
    },
    // Resposta para c5
    {
        id: "c6",
        body: "Um truque que eu uso: 2FN é sobre dependência parcial, 3FN é sobre transitiva.",
        user: users[1], // Bruno
        post_id: postsData[1].id, // p2
        parent_id: "c5", // <-- RESPOSTA (Nested)
        created_at: new Date(Date.now() - 1000 * 60 * 25),
        likeCount: 0,
        likedByMe: false
    }
  ];

  // ===== MONTAGEM FINAL (Aninhando comentários nos posts) =====
  
  const posts: ForumPostDTO[] = postsData.map(post => {
        // Filtra todos os comentários que pertencem a este post
        const postComments = commentsData.filter(comment => comment.post_id === post.id);
        
        return {
            ...post,
            comments: postComments, // Anexa o array de comentários
        };
  });

  // Retorna todos os dados, caso precise deles separadamente ou aninhados
    return {
            users,
            topics,
            posts, // Posts com comentários já aninhados
            comments: commentsData, // A lista plana de comentários
    };
};