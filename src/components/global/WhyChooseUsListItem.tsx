//Styles
import classes from "../../assets/styles/whychooseus.module.css"

type WhyChooseUsListItemProps = {
  iconImg: string
  iconImgAlt: string
  listContent: string
}

export default function WhyChooseUsListItem({ iconImg, iconImgAlt, listContent }: WhyChooseUsListItemProps) {
  return (
    <li className="d-flex">
      <div className="pe-4">
        <img className={classes["wcu-img-item"]} src={iconImg} alt={iconImgAlt} />
      </div>
      <div className="align-self-center pt-3">
        <p className="h4 homeserve-medium">{listContent}</p>
      </div>
    </li>
  )
}
