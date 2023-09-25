import "./Skill.scss";

const Skill = (props) => {
    const { name, description, image } = props;

    return <div className="skills__item">
            <div className="skills__item_img">
                <img src={image} alt="icon_skill" />
            </div>
            <h3 className="title title_fz14">{name}</h3>
            <p>{description}</p>
        </div>
}

export default Skill;