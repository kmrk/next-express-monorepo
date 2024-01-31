const ok = (data: any) => new Response(JSON.stringify(data), { status: 200 })
const error = (error: any) => new Response(JSON.stringify({ message: error }), { status: 401 })

export {ok,error}