import TabButton from "./TabButton"
import { EXAMPLES } from "../../data"
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples()
{
    //  let tabContent = "Hey there click the button";
    //hooks 
    const [selectedTopic,setSelectecTopic] = useState();
      function handleSelect(selectButton)
      {
        //console.log(selectButton);
        //tabContent = selectButton;
        //hooks
        setSelectecTopic(selectButton);
        console.log(selectButton);
      }
       
      let tabContent = <p>Please select a topic </p>;
    
      if(selectedTopic )
      {
        tabContent = 
              <div id="tab-content">
               <h3>{EXAMPLES[selectedTopic].title}</h3>
               <p>{EXAMPLES[selectedTopic].description}</p>
               <pre>
                <code>
                   {EXAMPLES[selectedTopic].code}
                </code>
               </pre>
              </div>
      }

    return(
        <Section title="Examples" id="examples">
          <Tabs 
          ButtonContainer = "menu"
          button={
            <>
             <TabButton isSelected={selectedTopic === 'components'} 
            onClick={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} 
            onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
             onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
             onClick={() => handleSelect('state')}>State</TabButton>
             </>}>  
              { tabContent } 
              </Tabs>

          {/* <menu> */}
            {/* isselected ye batane ke liye hai ki on sa button select kiya hai  */}
            {/* <TabButton isSelected={selectedTopic === 'components'} 
            onClick={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} 
            onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
             onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
             onClick={() => handleSelect('state')}>State</TabButton> */}
          {/* </menu> */}
          {/* {tabContent}; */}
          {/* {selectedTopic} */}

          {/* Approch 1 */}
          {/* {!selectedTopic ?
           ( <p>Please select a topic </p>) :
           <div id="tab-content">
           <h3>{EXAMPLES[selectedTopic].title}</h3>
           <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>
            <code>
               {EXAMPLES[selectedTopic].code}
            </code>
           </pre>
          </div>} */}
           
           {/* Approch 2 */}
           {/* {!selectedTopic && <p>Please select a topic </p>} 
           {selectedTopic && (
            <div id="tab-content">
           <h3>{EXAMPLES[selectedTopic].title}</h3>
           <p>{EXAMPLES[selectedTopic].description}</p>
           <pre>
            <code>
               {EXAMPLES[selectedTopic].code}
            </code>
           </pre>
          </div>
          )} */}

          {/* Approch */}
          {/* { tabContent } */}
        </Section>
    )
}