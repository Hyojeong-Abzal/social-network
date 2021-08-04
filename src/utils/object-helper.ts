export const updateObjectInArray = (
  items: any,
  itemId: number,
  objectPropName: string,
  newObjectProps: any
) => {
  return items.map((u: any) => {
    if (u[objectPropName] === itemId) {
      return { ...u, ...newObjectProps }
    }
    return u
  })
}
