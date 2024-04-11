export const validateRequired = (field:any) => {
  if(field == undefined || field == null) {
    return false
  }

	if(typeof field == 'string') {
		return !!field
	}

  if(typeof field == 'object') {
		return Object.keys(field).length != 0
	}

	if(Array.isArray(field)) {
		return field.length > 0
	}

  return true
} 
