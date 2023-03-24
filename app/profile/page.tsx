import AddLink from './AddLink'

const fields = Array(5).fill({
  link: 'https://example.com',
  title: 'Example',
})

export default function Profile() {
  return (
    <div>
      {/* https://beta.nextjs.org/docs/data-fetching/mutating */}
      {/* implement */}
      <AddLink />
      <div className='my-4'>

        {fields.map(v => (
          <div className='w-full bg-red-200 my-4 p-2 rounded-lg'>
            <div className="flex justify-between">
              <div>
                <p className='font-bold'>{v.title}</p>
                <p>{v.link}</p>
              </div>
              <div>
                <button className='btn btn-success'>edit</button>
                <button className='btn btn-error'>delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
  