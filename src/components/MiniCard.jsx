const MiniCard = ({ proficiency }) => {
  return(
    <div className="mini-card card m-1 text-center">
        <p className="px-2 py-1 m-0">{proficiency}</p>
    </div>
  );
}

export default MiniCard;
