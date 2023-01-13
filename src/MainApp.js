import { useState, useRef } from "react";
import ResultList from "./ResultList";

function MainApp() {
    const linkInputRef = useRef();
    const notValid = useRef();
    const [results, setResults] = useState([])
    const result = {};
    const [isPending, setIsPending] = useState(false);
    const [id, setId] = useState(1);


    function getShortenLink(e){
        e.preventDefault();
        result.id = id;
        setId(id+1);
        result.oriLink = linkInputRef.current.value;
        linkInputRef.current.value = '';
        setIsPending(true);
        fetch(`https://api.shrtco.de/v2/shorten?url=${result.oriLink}`)
                .then(res => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data.result.short_link)
                    result.shortLink = data.result.short_link;
                    console.log('new result:', result)
                    setResults([...results, result]);
                    setIsPending(false);
                })
                .catch((err) => {
                        setIsPending(false);
                        linkInputRef.current.classList.add('not-valid');
                        if(notValid.current.classList.contains('hidden')){
                            notValid.current.classList.remove('hidden');
                        }
                        notValid.current.innerText = 'Invalid link'
                        console.log(err.message);
                    })
    }

    function formValidation() {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        if(!regex.test(linkInputRef.current.value)){
            linkInputRef.current.classList.add('not-valid');
            if(notValid.current.classList.contains('hidden')){
                notValid.current.classList.remove('hidden');
            }
            notValid.current.innerText = 'Please add a link'
        } else if (regex.test(linkInputRef.current.value)) {
            if(linkInputRef.current.classList.contains('not-valid')){
                linkInputRef.current.classList.remove('not-valid');
                notValid.current.classList.add('hidden');
            }
        }
    }

    return ( 
        <div className="main-app my-[4rem] lg:my-[6rem]">
            <div className="input-container p-8 lg:p-10 bg-primary-dark-violet rounded-xl">
                <form onSubmit={getShortenLink} className="w-full flex flex-col lg:flex-row lg:items-start relative">
                    <input ref={linkInputRef} onChange={formValidation} className="w-full py-4 px-6 rounded-lg focus:outline-none" type="text" required placeholder="Shorten a link here..."/>
                    <p ref={notValid} className="hidden text-secondary-red text-sm mt-2 italic lg:absolute lg:left-0 lg:bottom-[-1.5rem]">Please add a link</p>
                    <input type="submit" value={!isPending && "Shorten It!" || isPending && "Loading..."} className="font-bold submit py-3 lg:py-4 px-4 lg:w-[200px] lg:ml-4 mt-4 lg:mt-0 bg-primary-cyan text-white rounded-lg w-full cursor-pointer hover:bg-primary-cyan-hover" />
                </form>
            </div>

            <ResultList results={results}/>
        </div>
     );
}

export default MainApp;