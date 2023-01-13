import { useEffect } from "react";

const ResultList = (props) => {
    let results = props.results;
    useEffect(() => {
        results = props.results;
    }, [props])
    console.log(results);
    // const shortedLink = useRef();
    // const shortedLinks = useRef(results.map(() => createRef()));
    // const copyBtn = useRef();
    // const copyBtns = useRef(results.map(() => createRef()));

    function copyLink(id){
        const shortedLink = document.getElementById(`result-${id}`)
        const copyBtn = document.getElementById(`btn-${id}`)
        navigator.clipboard.writeText(shortedLink.innerText);
        copyBtn.innerText = 'Copied!'
        if(copyBtn.classList.contains('bg-primary-cyan')){
            copyBtn.classList.remove('bg-primary-cyan')
            copyBtn.classList.remove('hover:bg-primary-cyan-hover')
        }
        copyBtn.classList.add('bg-primary-dark-violet');
    }
    
    
    

    return ( 
        <div className="result-list my-10">
            { results.map(result => {
                return(
                <div className="result-wrapper flex justify-between flex-col my-10 lg:flex-row lg:items-center" key={result.id}>
                    {/* original link: */}
                    <p className="link mb-5 lg:mb-0">{ result.oriLink }</p>
                    <div className="flex justify-end flex-col lg:flex-row lg:items-center">
                        {/* shorten link: */}
                        <p id={`result-${result.id}`} className="shorten-link mb-3 text-primary-cyan lg:mb-0">{ result.shortLink }</p>
                        <button id={`btn-${result.id}`} onClick={()=>copyLink(result.id)} className="font-bold w-full lg:w-[130px] bg-primary-cyan text-white cursor-pointer hover:bg-primary-cyan-hover py-3 px-6 rounded-lg lg:ml-6">Copy</button>
                    </div>
                </div>
                )
            }) }
        </div>
     )
}
 
export default ResultList;