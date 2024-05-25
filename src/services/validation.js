export const validateParams = (schema, params) => {
    const { error, value } = schema.validate(params, { abortEarly: false })
    if (error) {
        const invalidParams = []
        const err = error.details.map((value) => {
            invalidParams.push(value.path[0])
            return {
                key: value.path[0],
                value: value.context.value,
                message: value.message,
            }
        })
        return { err, invalidParams }
    }
    return { ...value }
}