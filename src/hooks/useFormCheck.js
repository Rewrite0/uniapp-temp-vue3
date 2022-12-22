/**
 * 表单验证: 空值检测, 密码相等验证, 手机号检测
 * @param {reactive} form 包含表单数据的reactive
 * @returns
 */
function useFormCheck(form) {
  const nullCheck = (keyName) => {
    let status = true;

    for (const key in keyName) {
      if (form[key] == "") {
        uni.showModal({
          title: `${keyName[key]}不能为空!`,
          showCancel: false,
        });
        status = false;
        return status;
      }
    }

    // 判断是否有空值
    if (status == false) return false;

    return status;
  };

  /**
   * 验证两次密码相等
   * @param {string} pwd1 密码1
   * @param {string} pwd2 确认密码
   */
  const twoPwdCheck = (pwd1, pwd2) => {
    if (pwd1 !== pwd2) {
      uni.showModal({
        title: "两次密码不一致!",
        showCancel: false,
      });

      return false;
    } else {
      return true;
    }
  };

  /**
   * 验证手机号格式
   * @param {string} tel 手机号
   */
  const telCheck = (tel) => {
    if (/^(?:(?:\+|00)86)?1\d{10}$/.test(tel) == false) {
      uni.showModal({
        title: "手机号码格式不正确!",
        showCancel: false,
      });

      return false;
    } else {
      return true;
    }
  };

  const fullTest = (keyName, [pwd, pwd2], tel) => {
    if (!nullCheck(keyName)) return false;
    if (!twoPwdCheck(form[pwd], form[pwd2])) return false;
    if (!telCheck(form[tel])) return false;

    return true;
  };

  return {
    nullCheck,
    twoPwdCheck,
    telCheck,
    fullTest,
  };
}

export { useFormCheck };
