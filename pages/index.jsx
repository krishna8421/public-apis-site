import style from '../styles/Home.module.scss'
import Header from '../components/NavBar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import SingleCard from '../components/SingleCard'

export async function getStaticProps() {
  const res = await fetch('http://public-apis-site.herokuapp.com/')
  const data = await res.json()
    
  return{
    props: {
      apiDataAll: data.allApi
    }
  }
}
const Home = ({ apiDataAll }) => {


  function searchFunction(e){
    e.preventDefault();
    console.log(e.target.value.toLowerCase())
    const searchTeem = e.target.value.toLowerCase()
    //for(const i=0;i<apiDataAll.length; i++){
    //  if(apiDataAll)
    //}
    
  
  }
  
  return (
    <>
      <Header />
      <SearchBar searchFunction={searchFunction} />


      <div className={style.apiList}>
          {apiDataAll.map(apiData =>{
            const { API,Auth,CORS,Category,Description,HTTPS,Link } = apiData;
          
            return(

                  <SingleCard key={Link} API={API} Auth={Auth} CORS={CORS} Category={Category} Description={Description} HTTPS={HTTPS} Link={Link} />
                  )
                })}
      </div>

      <Footer />
    </> 
  )
}


export default Home;