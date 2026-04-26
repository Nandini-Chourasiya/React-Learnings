import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks : []
  });
 
  function handelAddTask(text){
     setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text : text ,
        projectId : prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks : [newTask , ...prevState.tasks]
      };
    });
  }

  function handelDeleteTask(id){
     setProjectState((prevState) => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter((tasks) => tasks.id !== id),
      };
    });
  }

  function handelSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    });
  }

  function handelStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  function handelCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }
  
  function handelDeleteProject(id){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handelAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handelAddProject}
        onCancel={handelCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProject={handelStartAddProject}
      />
    );
  } else {
    const selectedProject = projectState.projects.find(
      project => project.id === projectState.selectedProjectId
    );

    content = (
    <SelectedProject 
    project={selectedProject} 
    onDelete={handelDeleteProject}
    onAddTask={handelAddTask}
    onDeleteTask={handelDeleteTask}
    tasks={projectState.tasks.filter(
    task => task.projectId === projectState.selectedProjectId
  )}
    />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handelStartAddProject}
        projects={projectState.projects}
        SelectProject={handelSelectProject}
        selectedProjectId={projectState.selectedProjectId}

      />
      {content}
    </main>
  );
}

export default App;