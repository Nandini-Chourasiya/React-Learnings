export default function TabButton({children,isSelected , ...props}){
    // function handleClick()
    // {
    //     console.log("Hello World");
    // }
    return(
       <li><button className={ isSelected ? 'active' : undefined} {...props}>{children}</button></li>
    );
}