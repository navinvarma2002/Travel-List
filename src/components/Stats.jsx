 function Stats({items}) {

  if(!items.length)
    return(<p className="stats"><em>Start Adding some items to your packing list</em></p>)

    const numItems = items.length
    const numPacked = items.filter(item => item.packed ).length;
    const Percentage = Math.round((numPacked / numItems)* 100)
    return (
      <footer className="stats">

        {Percentage === 100 ? "you are ready to go" :`
        You have ${numItems} items on your list, and you already packed ${numPacked} (${Percentage}%)`}

      </footer>
    );
  }
  
  export default Stats