import React from 'react'

const Footer = () => {
    return (
        <footer className='container max-w-2xl px-6 py-4 mx-auto'>
            <div className='flex flex-row justify-center items-center text-center gap-1'>Built with
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
                by
                <a href="https://twitter.com/Subramanya11rao" target="_blank" className="cursor-pointer underline text-indigo-600 hover:text-indigo-500 font-normal" rel="noreferrer">Subramanya</a>
            </div>
        </footer>
    )
}

export default Footer
