function emojiInMinutes(minutes){
  let interval = 5;
  let emoji = '☕️';
  let emojis = ''

  if(minutes >= 30) {
    interval = 10;
  }

  for (let i = 0; i < minutes; i += interval){
    emojis += emoji;
  }

  return emojis;
}




function Article({title, date= "January 1, 1970", preview, minutes}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} | {emojiInMinutes(minutes)} {minutes} mins read
        </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article