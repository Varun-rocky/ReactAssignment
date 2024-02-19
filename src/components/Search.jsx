
import Input from "./Input";

function Search({searchHandler}) {
  return (
    <div>
<Input type="search" changeHandler={searchHandler} classes="px-2"/>
      
    </div>
  )
}

export default Search
