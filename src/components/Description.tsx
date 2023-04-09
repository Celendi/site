import { ReactComponent as Logo } from '../assets/logo.svg';

function Description() {
    function scrollToFeatures() {
        const element = document.getElementById('features');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='sm:flex'>
            <div className='flex flex-col mt-20 items-center sm:items-start sm:ml-64'>
                <h1 className='text-white font-proxima-nova font-bold text-3xl sm:text-5.5xl text-center sm:text-left'>
                    Celendi
                </h1>
                <p className='text-gray-300 w-96 mt-3 sm:mt-8 mb-1 text-center sm:text-left p-4'>
                    Celendi is a multipurpose Discord bot designed to be the only bot you need in your server, containing a wide selection of commands from fun to moderation, we have it all!
                </p>
                <div className='flex'>
                    <a href='/invite' className='bg-brand text-white hover:bg-brand-hover hover:text-white block px-3 py-2 rounded-md text-base font-medium mt-5 mr-4'>
                        <button>Add to your server</button></a>
                    <button className='border-1 border-brand text-brand hover:bg-brand hover:text-white block px-3 py-2 rounded-md text-base font-medium mt-5' onClick={scrollToFeatures}>See features</button>
                </div>
            </div>
            <div className='hidden sm:flex flex-col items-start justify-center mt-7 p-8 ml-2.5 mr-2.5'>
                <Logo className='h-64 drop-shadow-xl' />
            </div>
        </div>
    );
}

export default Description;