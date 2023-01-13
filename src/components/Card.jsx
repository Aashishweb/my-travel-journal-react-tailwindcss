export default function Card(props){
    
    return(
        
        <div className="flex flex-row max-w-xl mx-3 sm:mx-auto  items-center border-b py-12 border-gray-200
         gap-5">
            <img className="w-32 h-44 rounded-md object-cover " src={props.imageUrl} alt="hello"  />
            <div className="max-w-sm text-xs ">
                <div className="flex flex-row gap-2    text-center">
                    <img src='./assets/location.svg'/>
                    <p className="text-black uppercase tracking-widest">{props.location}</p>
                    <a className="underline text-gray-400" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div>
                    <h1 className="text-2xl pb-2 font-bold">{props.title}</h1>
                    <h3 className="py-2 font-bold">{props.startDate} - {props.endDate}</h3>
                    <p className=" leading-relaxed font-normal text-gray-800">{props.description}</p>
                </div>
            </div>
        </div>
    )
}