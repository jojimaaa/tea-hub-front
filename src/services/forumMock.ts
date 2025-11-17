import { UserSchema, ForumTopicSchema, ForumPostSchema, CommentSchema } from '@/interfaces/ForumSchemas';
import { v4 as uuidv4 } from 'uuid';

// ===== FUNÇÃO GERADORA DE MOCK =====

export const generateMockData = () => {
  // ===== USERS =====
  const users: UserSchema[] = [
    {
      id: "u1",
      name: "Alice Souza",
      username: "alice_souza",
      email: "alice@example.com",
    },
    {
      id: "u2",
      name: "Bruno Lima",
      username: "bruno_lima",
      email: "bruno@example.com",
    },
    {
      id: "u3",
      name: "Carla Mendes",
      username: "carla_mendes",
      email: "carla@example.com",
    },
    {
      id: "teste",
      name: "TESTE",
      username: "teste",
      email: "teste@example.com",
    },
  ];

  // ===== TOPICS =====
  const topics: ForumTopicSchema[] = [
    { id: "t1", name: "JavaScript" },
    { id: "t2", name: "Banco de Dados" },
    { id: "t3", name: "DevOps" },
  ];

  // ===== POSTS (Sem os comentários ainda) =====
  // (Usando os corpos de Markdown da nossa conversa anterior)
  type PostData = Omit<ForumPostSchema, 'comments'>;
  
  const postsData: PostData[] = [
    {
      id: 'p1',
      title: 'Entendendo Promises e Async/Await',
      body: `
# Entendendo Promises no JavaScript
Promises são a base da assincronicidade moderna no JS.

<br/>

## O que é uma Promise?
Uma **Promise** é um objeto...

<br/>

\`\`\`javascript
const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Dados recebidos!"), 1000);
});
\`\`\`
## Async/Await
A sintaxe **async/await** é "açúcar sintático"...
\`\`\`javascript
async function buscarDados() {
  try {
    const data = await minhaPromise;
    console.log(data);
  } catch (error) {
    console.error("Houve um erro", error);
  }
}
\`\`\`
      `,
      topic: topics[0],
      user: users[0],
      created_at: new Date(Date.now() - 1000 * 60 * 5), // 5 min atrás
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
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
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
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 dia atrás
    },
  ];

  // ===== COMMENTS (Lista Plana) =====
  const commentsData: CommentSchema[] = [
    // --- Comentários para o Post 1 (p1) ---
    {
      id: "c1",
      body: "Excelente explicação! Me ajudou muito.",
      user: users[1], // Bruno
      post_id: postsData[0].id, // p1
      parent_id: undefined,
      created_at: new Date(Date.now() - 1000 * 60 * 4),
    },
    {
      id: "c2",
      body: "Tem algum exemplo prático com async/await e `fetch`?",
      user: users[2], // Carla
      post_id: postsData[0].id, // p1
      parent_id: undefined,
      created_at: new Date(Date.now() - 1000 * 60 * 3),
    },
    // Resposta para c2
    {
      id: "c3",
      body: "Boa pergunta! Seria algo assim...",
      user: users[0], // Alice
      post_id: postsData[0].id, // p1
      parent_id: "c2", // <-- RESPOSTA (Nested)
      created_at: new Date(Date.now() - 1000 * 60 * 2),
    },
    // Resposta para c3 (Nível 3)
    {
      id: "c4",
      body: "Obrigado, Alice! E para tratar erros, eu usaria um try/catch?",
      user: users[2], // Carla
      post_id: postsData[0].id, // p1
      parent_id: "c3", // <-- RESPOSTA (Nested Nível 3)
      created_at: new Date(Date.now() - 1000 * 60 * 1),
    },
    // --- Comentários para o Post 2 (p2) ---
    {
      id: "c5",
      body: "Gostei da explicação sobre 3FN! Sempre confundo.",
      user: users[0], // Alice
      post_id: postsData[1].id, // p2
      parent_id: undefined,
      created_at: new Date(Date.now() - 1000 * 60 * 30),
    },
    // Resposta para c5
    {
      id: "c6",
      body: "Um truque que eu uso: 2FN é sobre dependência parcial, 3FN é sobre transitiva.",
      user: users[1], // Bruno
      post_id: postsData[1].id, // p2
      parent_id: "c5", // <-- RESPOSTA (Nested)
      created_at: new Date(Date.now() - 1000 * 60 * 25),
    }
  ];

  // ===== MONTAGEM FINAL (Aninhando comentários nos posts) =====
  
  const posts: ForumPostSchema[] = postsData.map(post => {
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