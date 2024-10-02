import Link  from "next/link"

const Header = ({title, linkhref, linktitle }) => {
    return (
        <div  className="p-4 flex justify-between items-center bg-color-secondary rounded m-4 mt-7">
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
        {linkhref && linktitle ? 
        <Link href={linkhref} className="md:text-xl text-md underline text-color-primary hover:text-color-accent transition-all">{linktitle}</Link>
        :null
         }
        
        </div>
    )
}
export default Header