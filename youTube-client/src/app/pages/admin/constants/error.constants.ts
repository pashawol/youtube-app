import { FormError } from "@app/shared/models/error.model"

const TitleErrors: FormError[] = [
    { name: "required", text: "Please enter a title" },
    { name: "minlength", text: "The title is too short" },
    { name: "maxlength", text: "The title is too long" }
]
const DescriptionErrors: FormError[] = [{ name: "maxlength", text: "The description is too long" }]

const ImgErrors: FormError[] = [{ name: "required", text: "Please enter an image" }]

const VideoErrors: FormError[] = [{ name: "required", text: "Please enter a video" }]

const CreationDateErrors: FormError[] = [
    { name: "required", text: "Please enter a creation date" },
    { name: "minlength", text: "The creation date is too short" },
    { name: "maxlength", text: "The creation date is too long" },
    { name: "date", text: "The creation date is invalid" }
]

const TagErrors: FormError[] = [
    { name: "required", text: "Please enter a tag" },
    { name: "minlength", text: "The tag is too short" },
    { name: "maxlength", text: "The tag is too long" }
]

export const AdminFormErrors = {
    title: TitleErrors,
    description: DescriptionErrors,
    img: ImgErrors,
    video: VideoErrors,
    creationDate: CreationDateErrors,
    tag: TagErrors
}
