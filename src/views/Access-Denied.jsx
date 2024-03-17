
function AccessDenied() {
    return (
        <>
         <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600 mb-8">You do not have permission to access this page.</p>
            <button className="bg-[#d69a2bc6] hover:bg-[#d69a2be8] text-white font-bold py-2 px-4 rounded">
                <a href="/">Return to Home</a>
            </button>
        </div>
        </>
    )
}

export default AccessDenied;