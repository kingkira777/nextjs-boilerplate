


const Home = (props:any) => {
  return (
      <>
        <div>Client Render</div>
        <>{props.message}</>
      </>
  )
}



// This gets called on every request
export async function getServerSideProps() {
 
  // Pass data to the page via props
  return { props: { message : 'This is render in server side' } }
}


export default Home;


