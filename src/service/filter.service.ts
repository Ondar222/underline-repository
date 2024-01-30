export function getRegions(array: any) {
  const regions: any = []
  array?.forEach((element: any) => {
    if (!regions.includes(element.address.region.name)) {
      regions.push(element.address.region.name)
    }
    else {

    }
  });
  return regions
}

export function getLocalities(array: any, region: string) {
  let localities: any = []
  let arrays: any = []
  arrays = array.filter((item: any) => item.address.region.name === region && !array.includes(item.address.region.name))
  localities = arrays
  return localities
}

export function getGrades(array: any) {
  const grades: string[] = [];
  // for (let i = 0; i <= Array(array).length; i++) {
  //   for (let j = 1; j <= array[i].coal_products.length-1; j++) {
  //     console.log(array[i].coal_products[j].name)
  //     if (!grades.includes(array[i].coal_products[j].name)) {
  //       grades.push(array[i].coal_products[j].name)
  //     }
  //   }
  // }

  array.forEach((item: any) => {
    for (let i = 0; i < item.coal_products.length; i++) {
      if (!grades.includes(item.coal_products[i].name))
        grades.push(item.coal_products[i].name)
    }

  })

  return grades
}

export function isCoal(array: any, grade: string) {
  array.forEach((element: any) => {
    if (element.name === grade) {
      return true
    }
    else {
      return false
    }
  });
  return true
}