const Stacks = () => {
    return (
        <>
        <section className="spacer layer2 h-max bg-zinc-900 flex flex-col items-center px-6 sm:px-10">
        <hr className="border-[2px] border-primary w-full max-w-[550px] mt-20 mb-10" />
            <h1 className="text-white text-5xl font-medium">Stacks</h1>
            <div className="grid grid-cols-2 gap-10 m-10 text-white  sm:grid-cols-3">
                <p className="stack_container shadow-2xl shadow-black"><img src="/public/logo-html.svg" alt="logo" />HTML</p>
                <p className="stack_container shadow-2xl shadow-black"><img src="/public/logo-css.svg" alt="logo" />CSS</p>
                <p className="stack_container shadow-2xl shadow-black"><img src="/public/logo-javascript.svg" alt="logo" />JavaScript</p>
                <p className="stack_container shadow-2xl shadow-black"><img src="/public/logo-react.svg" alt="logo" />React</p>
                <p className="stack_container shadow-2xl shadow-black"><img src="/public/logo-typescript.svg" alt="logo" />TypeScript</p>
                <p className="stack_container shadow-2xl shadow-black"><img src="/public/logo-tailwind.svg" alt="logo" />Tailwind CSS</p>
            </div>
        </section>
        </>
    );
};

export default Stacks;
