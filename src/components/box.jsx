export default function Box(props){
    let dcv = "box w-[90px] h-[90px] border-black border-4 text-center font-bold text-xl m-1 "; 
    dcv = props.on ? dcv + "bg-green-500" : dcv + "bg-red-500"

    return(
        <button className={dcv} onClick={() => props.onClick(props.id)}>{props.id}</button>
    )
}