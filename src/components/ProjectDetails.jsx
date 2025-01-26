import { useState } from "react"
import PROJECTS from "../data/data";


export default function ProjectDetails({ id }) {

    const [project, setProject] = useState({});

    PROJECTS.forEach((project) => {
        if(id === project.id) {
            setProject(project);
        }else {
            setProject({});
        }
    })

    console.log(project);
    

    return <>
        <div className='box bg-white  border border-[#98999b] w-[1000px] h-[1500px] rounded-[2rem] pb-5 mt-4 hover:-translate-y-2 duration-300'>
            
        </div>
    </>
}