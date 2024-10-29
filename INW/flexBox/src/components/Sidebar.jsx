export default function Sidebar({children}){
    return(
        <div className='bg-slate-950 w-1/4 flex flex-col justify-around items-center'>
          {children}
        </div>
    )
}