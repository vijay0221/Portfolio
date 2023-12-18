function Alert({type,text}) {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
    <div className={`${type==="danger"?'bg-red-800':'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}>
    <p className={`${type==="danger"?'bg-red-500':'bg-blue-800'} text-xs flex rounded-full px-2 py-1`}>{type==='danger'?'Failed':'Success'}</p>
    <p className="mr-2 text-left">
      {text}
    </p>
    </div>
      
    </div>
  )
}

export default Alert
