'use client'
import { useState } from 'react'

export default function AddLink() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(v => !v)
    }

    const handleSubmitClick = async () => {
      toggleModal()
    }

    return (
      <div className="flex flex-col items-center py-2">
        <div className="w-full">
          <button
            onClick={toggleModal}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            {isModalOpen ? 'X (should be icon)' : '+ Add link'}
          </button>
          {isModalOpen && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 transition duration-500 ease-in-out">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
                    Link
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="link"
                    type="text"
                    placeholder="https://example.com"
                  />
                </div>
                <button
                  onClick={handleSubmitClick}
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-green-600"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    )
}