import { Link } from "react-router-dom"

export default function DashBoardView() {
    return (
        <>
            <h1 className="text-5xl font-black">Mis Proyectos</h1>
            <p className="text-2xl font-light text-gray-500 mt-5 ">Maneja y administra tus proyectos</p>

            <Link to={""}
                className="bg-purple-400 hover:bg-purple-500 text-white font-bold px-10 py-3 text-xl cursor-pointer transition-colors"
            >

                Nuevo proyecto</Link>
        </>
    )
}
