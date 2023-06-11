import './Nature.css'

export interface Nature_t{
  slot: number;
  type: {
    name: string;
  };
}

export default function Nature({ natureInfo }: { natureInfo: Nature_t[] }) {
  return (
    <div className='Pokemon-natures'>
      <p className='Nature-title'>Nature :</p>
      <ul className='Natures'>
        {natureInfo.map((nature) => (
          <li key={nature.slot}>
            {nature.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}