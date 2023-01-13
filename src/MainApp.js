import { useState, useRef } from "react";
import ResultList from "./ResultList";

function MainApp() {
    // refs declaration
    const linkInputRef = useRef();
    const notValidAlert = useRef();

    // states declaration
    const [results, setResults] = useState([]) //array of object shortening url data
    const result = {}; //object for bundling data of shortening url
    const [isPending, setIsPending] = useState(false); //pending status
    const [id, setId] = useState(1); //data id, begin with 1

    // functions
    function getShortenLink(e){     //fetching, storing, and rendering shortened url
        e.preventDefault();         //prevent reload page
        result.id = id;             //set the data id
        setId(id+1);                //increment id for the next data
        result.oriLink = linkInputRef.current.value;    //get the original url value
        linkInputRef.current.value = '';                //clearing the input value
        setIsPending(true);                             //set pending to fetch the shortened url
        fetch(`https://api.shrtco.de/v2/shorten?url=${result.oriLink}`) //fetch from shrtco API
                .then(res => {
                    return res.json()                                   //return promise of response.json
                })
                .then((data) => {
                    result.shortLink = data.result.short_link;  //save the shortened url to result object
                    setResults([...results, result]);           //push the result object into the results array
                    setIsPending(false);                        //fetch completed 
                })
                .catch((err) => {
                        setIsPending(false);                                //fetch failed
                        linkInputRef.current.classList.add('not-valid');    //alert the user
                        if(notValidAlert.current.classList.contains('hidden')){
                            notValidAlert.current.classList.remove('hidden');
                        }
                        notValidAlert.current.innerText = 'Invalid link'    //alert text
                        console.log(err.message);                           //console log error message
                    })
    }

    function formValidation() {     //form validation with regex
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'); //regex for url validation
        if(!regex.test(linkInputRef.current.value)){                //testing the regex to the input value
            linkInputRef.current.classList.add('not-valid');
            if(notValidAlert.current.classList.contains('hidden')){
                notValidAlert.current.classList.remove('hidden');
            }
            notValidAlert.current.innerText = 'Please add a link'   //invalid message
        } else if (regex.test(linkInputRef.current.value)) {
            if(linkInputRef.current.classList.contains('not-valid')){
                linkInputRef.current.classList.remove('not-valid');
                notValidAlert.current.classList.add('hidden');
            }
        }
    }

    return ( 
        <div className="main-app my-[4rem] lg:my-[6rem]">
            <div className="input-container p-8 lg:p-10 bg-primary-dark-violet rounded-xl">
                <form onSubmit={getShortenLink} className="w-full flex flex-col lg:flex-row lg:items-start relative">
                    {/* url input */}
                    <input ref={linkInputRef} onChange={formValidation} className="w-full py-4 px-6 rounded-lg focus:outline-none" type="text" required placeholder="Shorten a link here..."/>
                    {/* invalid alert text */}
                    <p ref={notValidAlert} className="hidden text-secondary-red text-sm mt-2 italic lg:absolute lg:left-0 lg:bottom-[-1.5rem]">Please add a link</p>
                    {/* submit button */}
                    <input type="submit" value={!isPending && "Shorten It!" || isPending && "Loading..."} className="font-bold submit py-3 lg:py-4 px-4 lg:w-[200px] lg:ml-4 mt-4 lg:mt-0 bg-primary-cyan text-white rounded-lg w-full cursor-pointer hover:bg-primary-cyan-hover" />
                </form>
            </div>

            <ResultList results={results}/>    {/* Displaying the results */}
        </div>
     );
}

export default MainApp;