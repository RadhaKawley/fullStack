export default function EventsCard({ event }){
    return(
        <>
        <article key={event.id} className="mb-4 overflow-hidden rounded-lg border-2 border-black"
>
        <div className="bg-[#f5e9d8] border-b-2 border-black p-4">
            <h2 className="text-xl font-bold text-black">
            Event Name: {event.name}
            </h2>
        </div>

        <div className="bg-[#d97b56] p-5 text-white">
            <ol className="list-decimal pl-6">
            <li className="border-b border-black py-3">
                Location: {event.venue}
            </li>

            <li className="border-b border-black py-3">
                Date/Time: {event.date} / {event.time}
            </li>

            <li className="border-b border-black py-3">
                Price: £{event.priceMin} /{event.priceMax}
            </li>

            <li className="py-3">
                <a
                href={event.url}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
                >
                View Details
                </a>
            </li>
            </ol>
        </div>
        </article>
        </>
       
    );
}