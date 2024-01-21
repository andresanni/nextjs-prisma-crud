"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NewPage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if(params.taskId){
      fetch(`/api/tasks/${params.taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      });
    }    
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(params.taskId){
      const response = await fetch(`/api/tasks/${params.taskId}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
    }
    else{
      const response = await fetch(`/api/tasks`, {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
    }

    router.refresh();    
    router.push("/");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 w-1/4">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          placeholder="Título..."
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          rows="3"
          placeholder="Tarea..."
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value= {description}
        ></textarea>
        <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
        {
          params.taskId && (
            <button 
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={async()=>{
              const response = await fetch(`/api/tasks/${params.taskId}`,{
                method:"DELETE"
              })
              const data = await response.json();
              router.push("/");
            }}
            >
              Eliminar
            </button>
          )
        }
      </form>
    </div>
  );
};

export default NewPage;
