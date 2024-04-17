import { planning } from "../data/planning"

export default function Planning() {
  return (
    <>
        {planning.map((jour) => {
                return (
                <div key={jour.id} className='flex justify-between w-1/2 mx-auto my-2'>
                    <p className='text-slate-800'>{jour.date}</p>
                    <p className='text-slate-800'>{jour.ville}</p>
                </div>
                );
            })}
    </>
  )
}
