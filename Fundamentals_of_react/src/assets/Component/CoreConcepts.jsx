import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../../data"

export default function CoreConcepts(){
    return (
           <section id="core-concepts">
                  <h2>Core Concepts</h2>
                  <ul>
                    {/* one way is these but not optimal */}
                    {/* <CoreConcept
                    image = {CORE_CONCEPTS[0].image}
                    title = {CORE_CONCEPTS[0].title}
                    description = {CORE_CONCEPTS[0].description}
                    /> */}
                    {/* another way is these which is optimal
                     <CoreConcept {...CORE_CONCEPTS[0]}/>            
                     <CoreConcept {...CORE_CONCEPTS[1]}/>           
                     <CoreConcept {...CORE_CONCEPTS[2]}/>   */}
          
                     {/*these is the dynamic way  */}
                     {CORE_CONCEPTS.map((conceptItem)=>(
                      <CoreConcept key={conceptItem.title} {...conceptItem} />
                     ))}
                     
                  </ul>
                  </section>
          
    ) 
}