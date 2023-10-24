export const handler = async (_req, res) => {
await res.revalidate('/')

return res.json({revalidate: true})
}