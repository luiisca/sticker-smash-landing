import Image from "next/image";

const features = [
    {
        title: "Pick Images with Ease",
        content: "Select photos from your gallery effortlessly to start customizing."
    },
    {
        title: "Add Stickers in a Tap",
        content: "Browse and add fun stickers to your images with a simple tap."
    },
    {
        title: "Save to Device Gallery",
        content: "Save your personalized images directly to your device for easy access."
    }
]

function Card({ title, content }) {
    return (
        <div className="py-4 px-5 rounded-xl transition-all text-center">
            <h2 className="text-lg md:text-xl font-inter font-semibold mb-3">
                {title}
            </h2>
            <p className="font-inter m-0 opacity-60 leading-normal text-subtle max-w-xs">
                {content}
            </p>
        </div>
    )
}
const IndexPage = () => {
    return (
        <main className="flex space-y-12 flex-col justify-between items-center p-16 md:py-24 max-w-[1500px] mx-auto min-h-screen overflow-x-hidden">
            <div className="flex w-full items-center justify-between max-sm:flex-col max-sm:space-y-2 ">
                <div className="relative">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cal">
                        StickerSmash
                    </h1>
                    <div className="absolute right-0 translate-x-[80%] md:translate-x-[65%] top-0 -translate-y-[45%] rotate-[24deg] pt-1 pb-2.5">
                        <div className="relative flex items-center justify-center">
                            <div class="text-[2.5rem] md:text-[4.5rem] bg-clip-text text-transparent bg-white py-2 md:py-4">🔥</div>
                            <div className="absolute text-[2rem] md:text-[4rem]">🔥</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <a className="hidden lg:block text-foreground hover:text-foreground-emphasis hover:underline hover:underline-offset-4 w-fit text-black h-fit items-center group justify-between space-x-2 md:text-xl font-inter font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all" href="https://github.com/luiisca/sticker-smash/releases/download/v1.0/sticker-smash.apk">
                        Download
                    </a>
                    <a className="max-md:ml-4 text-black h-fit flex items-center group justify-between space-x-2 md:text-xl font-inter font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg bg-brand hover:bg-brand-emphasis transition-all" href="https://luiisca.github.io/sticker-smash/" target="_blank">
                        <span className="transition-all">Go to App</span>
                        <svg className="transition-all duration-200 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-col space-y-6 w-full flex-grow min-h-[50vh] items-center">
                <div className="flex-grow w-full flex justify-center items-center relative">
                    <div className="left-1/2 absolute blur-[45px] translate-z-0 bg-secondary-glow rounded-[50%] w-[580px] h-[460px] -ml-[500px] -z-10" />
                    <Image
                        src="/app.png"
                        alt="Whop W"
                        fill
                        objectFit="contain"
                        priority
                    />
                    <div className="left-[40%] absolute blur-[45px] translate-z-0 bg-primary-glow w-[300px] h-[240px] -z-20" />
                </div>
                <a className="lg:hidden w-fit text-black h-fit flex items-center group justify-between space-x-2 md:text-xl font-inter font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg bg-brand hover:bg-brand-emphasis transition-all" href="https://github.com/luiisca/sticker-smash/releases/download/v1.0/sticker-smash.apk">
                    <span>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feat, index) =>
                    <Card key={index} title={feat.title} content={feat.content} />
                )}
            </div>
        </main >
    );
};

export default IndexPage;
