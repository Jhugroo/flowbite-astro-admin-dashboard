import { useState } from "react"
import mysql from "mysql2/promise";

export default function NewProduct() {
    const [marque, setMarque] = useState('')
    const [model, setModele] = useState('')
    const [specification, setSpecification] = useState('')
    console.log(marque, model, specification)
   async  function handleSubmit(event) {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "supercar"
        });
        const [rows, fields] = await connection.execute("INSERT INTO voiture (Marque, Modele, Specification) VALUES(?, ?, ?)", [marque, model, specification]);
    }
    return (
        <div class="space-y-4">
            <div>
                <label
                    for="marque"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Marque</label
                >
                <input
                    onChange={(event) => setMarque(event.target.value)}
                    type="text"
                    name="title"
                    id="marque"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Marque"
                    required=""
                />
            </div>

            <div>
                <label
                    for="Modele"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Modele</label
                >
                <input
                    onChange={(event) => setModele(event.target.value)}
                    type="text"
                    name="title"
                    id="modele"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Modele"
                    required=""
                />
            </div>

            <div>
                <label
                    for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Specs</label
                >
                <textarea
                    onChange={(event) => setSpecification(event.target.value)}
                    id="specification"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter specs here"></textarea>
            </div>

            <div
                class="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute"
            >
                <button
                    onClick={handleSubmit}

                    id="addProduct"
                    class="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Add product
                </button>
                <button
                    type="button"
                    data-drawer-dismiss="drawer-create-product-default"
                    aria-controls="drawer-create-product-default"
                    class="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 -ml-1 sm:mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"></path></svg
                    >
                    Cancel
                </button>
            </div>
        </div>
    )
}