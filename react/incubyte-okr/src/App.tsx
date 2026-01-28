export default function App() {
    return (
        <form className={"w-[300px] h-[100px] border border-black flex flex-col"}
              onSubmit={() => {
              }}>
            <input type="text" name={"objectives"} placeholder={"Enter a objectives"}/>
            <input type="text" name={"key-result"}/>
            <div className={"flex justify-between"}>
                <button className={"bg-black text-white px-4 py-2"}>submit</button>
                <button className={"bg-gray-400 px-4 py-2"}>clear</button>
            </div>
        </form>
    )
}