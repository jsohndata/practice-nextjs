## unit
each unit is about 4px (0.4rem)

## Dynamic Routing
* create a dir inside app with `[genre]` for dynamic routing.
* pass in param called and desctructre it `{ params: {genre} }`

File Structure
```
app > [genre]
```

<br>

Code
```
export default function Page({ params: {genre} }) {

  return (
    <main className="p-8">
      <h1 className="text-2xl text-orange-400 font-semibold">
        {genre} Movies
      </h1>
    </main>
  )
}
```

* directory with `page.js` becomes routed

### components =rename=> Shared