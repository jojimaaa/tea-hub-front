import '../app/globals.css'

interface AtminputProps {
  placeholderText: string;
  name:string;
  className?: string;
}

function Atminput({ name, placeholderText, className }: AtminputProps ){
    return (
        <input name={name} type="text" placeholder={placeholderText} className={className} />
    );
}

export default Atminput