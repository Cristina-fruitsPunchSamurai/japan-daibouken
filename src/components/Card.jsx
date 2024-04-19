
export default function Card({ image, city, day, date, hotel, tags, morning, afternoon}) {
  return (
    <div className="rounded overflow-hidden shadow-lg h-screen mb-4">
        <div className='relative'>
            <img className="w-full" src={image} alt="tokyo" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white px-4 py-2">
                <p className="font-bold text-xl mb-1">{city}</p>
                <p className="font-bold text-lg mb-1">{day} - {date}</p>
                <p className="font-bold text-lg mb-1">Hôtel : {hotel}</p>
            </div>
        </div>
        <div className="px-6 pt-4 pb-2">
            {tags.map(tag => (
                <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
            ))}
        </div>
        <div className='mb-6'>
            <p className='my-2 bg-amber-200 w-full rounded flex justify-center font-bold text-lg text-gray-500'>Matin</p>
            {morning && (
        <>
            {morning.spots.map(spot => (
                <p key={spot} className="text-zinc-800 text-base font-medium px-6">
                    {spot}
                </p>
            ))}
            <p className="text-zinc-800 text-sm px-6 pt-4">
                {morning.description}
            </p>
        </>
    )}
        </div>
        <div>
            <p className='my-2 bg-sky-300 w-full rounded flex justify-center font-bold text-lg text-gray-500'>Après-midi</p>
            {afternoon && (
        <>
            {afternoon.spots.map(spot => (
                <p key={spot} className="text-zinc-800 font-medium text-base px-6">
                    {spot}
                </p>
            ))}
            <p className="text-zinc-800 text-sm px-6 pt-4">
                {afternoon.description}
            </p>
        </>
    )}
        </div>
    </div>
  )
}
