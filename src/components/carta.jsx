const Carta = ({title, year, imgUrl})=>{

    return(
    
        <div className="box">
            <h3>{title}</h3>
            <h5>{year}</h5>
            <img src={imgUrl} alt="" />
            {Number(year)<=new Date().getFullYear() ? <span className="uscito">Uscito</span> : <span className="prossimamente">prossimamente</span>}
    
        </div>
    )
    
    }
    
    export default Carta;