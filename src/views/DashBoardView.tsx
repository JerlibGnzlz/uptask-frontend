import { getProject } from "@/api/ProjectAPI"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export default function DashBoardView() {

    const { data, isLoading } = useQuery({
        queryKey: ["projets"],
        queryFn: getProject
    })

    if (isLoading) {
        return "Cargando"
    }
    // console.log(data[3].clientName)
    // console.log(isLoading)


    if (data) return (
        <>
            <h1 className="text-5xl font-black">Mis Proyectos</h1>
            <p className="text-2xl font-light text-gray-500 mt-5 ">Maneja y administra tus proyectos</p>

            <nav className="my-5" >
                <Link to={"/projects/create"}
                    className="bg-purple-400 hover:bg-purple-500 text-white font-bold p-3 text-xl cursor-pointer transition-colors "
                >
                    Nuevo proyecto
                </Link>

                {data.length ? (
                    <p>{data.map(proyecto => (
                        <li>{proyecto.description}</li>
                    ))}</p>
                ) :
                    (
                        <p className="text-center py-20">
                            No hay proyectos
                        </p>

                    )}
            </nav>

        </>
    )
}
