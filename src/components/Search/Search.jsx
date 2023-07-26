import searchLogo from '../../assets/searchLogo.png'
import likeLogo from '../../assets/likeIcon.png'
import userLogo from '../../assets/userIcon.png'
import "./index.scss" 

const Search = () => {
  return (
    <div className='search'>
      <div className='search__input-container'>
        <img 
            src={searchLogo} 
            alt="search logo"
            className='search__search-logo' 
        />
        <input type="text" placeholder='Search' />
      </div>
      <div className='search__icones'>
        <img src={userLogo} alt="logo do usuario" />
        <img src={likeLogo} alt="Like logo" />
      </div>
    </div>
  );
};

export default Search
