import './Search.scss'

const Search = () => {
    return (
        <div className='search'>
            <p className='search__text'>Encontrá el mejor gimnasio de tu zona!!</p>
            <h3 className='search__title'>Búsqueda</h3>

            <form action="#" className='search__form'>
                <label for="zone" className='search__form__label'>Zona</label>
                <select name="zones" id="zone" className='search__form__select'>
                    <option value="selecciona">Selecciona una zona</option>
                    <option value="lujan de cuyo">Luján de Cuyo</option>
                    <option value="godoy cruz">Godoy Cruz</option>
                    <option value="maipu">Maipú</option>
                </select>
            </form>
        </div>
    );
}

export default Search;
