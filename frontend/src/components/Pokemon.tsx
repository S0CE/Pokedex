import Nature, {Nature_t} from './Nature';
import './Pokemon.css'

export interface Pokemon_t {
    name: string,
    id: string,
    types: Nature_t[],
    image: string
}

export default function Pokemon({pokemonInfo}: {pokemonInfo: Pokemon_t}) {
    return (
        <div className='Pokemon'>
          <div className='Pokemon-sheet'>
            <div className='Pokemon-identity'>
              <h2 className='Pokemon-name'>{pokemonInfo.name}</h2>
              <h2 className='Pokemon-id'>#{pokemonInfo.id}</h2>
            </div>
            <Nature natureInfo={pokemonInfo.types}/>
          </div>
          <img src={pokemonInfo.image}
               className='Pokemon-image'
               alt='Front sprite'>
          </img>
        </div>
    )
}