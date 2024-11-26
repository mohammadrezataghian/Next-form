"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import 'animate.css';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa";


const FormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [value, setValue] = useState(new Date());

  return (
    <>
      <form noValidate className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex gap-5 mb-3">
          {/* 
            {...register("Full name", { required: true, min: 1 })}
          /> */}
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp">
    <input
      type="text"
      id="fullName"
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-900 focus:ring-1 peer placeholder-transparent text-right text-black "
      placeholder="نام و نام خانوادگی"
      {...register("fullName", { required: "ابتدا نام را وارد کنید" })}
      required
    />
    {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
    <label
      htmlFor="fullName"
      className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-valid:top-2 peer-valid:text-sm peer-valid:-translate-y-2 peer-valid:text-gray-500"
    >
      نام و نام خانوادگی
    </label>
  </div>
          {/* 
            {...register("phone number", { required: true, min: 1 })}
          /> */}
<div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-1s">
    <input
      type="text"
      id="phone number"
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-900 focus:ring-1 peer placeholder-transparent text-right text-black "
      placeholder="شماره تلفن"
      {...register("phoneNumber", { required: " شماره تلفن معتبر نیست" })}
      required
    />
    {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
          )}
    <label
      htmlFor="phone number"
      className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-valid:top-2 peer-valid:text-sm peer-valid:-translate-y-2 peer-valid:text-gray-500"
    >
      شماره تلفن
    </label>
  </div>

        </div>
        <div className="w-full flex gap-5 mb-3">
          {/* 
            {...register("birth", { min: 1 })}
          /> */}
           <div className="relative w-1/2 rtl "> {/* animate__animated animate__fadeInUp animate__delay-2s */}
          <DatePicker value={value} onChange={setValue} calendar={persian} locale={persian_fa}  inputClass="custom-input" style={{
    width: "100%",
    boxSizing: "border-box",
    height: "57.6px",
    borderRadius:"0.375rem",
    border:'1px solid #D1D5DB',
  }}
  containerStyle={{
    width: "100%"
  }}/>
  <label htmlFor=""></label>
    {/* <input
      type="date"
      id="birth date"
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 peer placeholder-transparent text-right text-black "
      placeholder="تاریخ تولد"
      {...register("birthDate", { required: "ابتدا تاریخ تولد را وارد کنید" })}
    />
    {errors.birthDate && (
            <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
          )}
    <label
      htmlFor="birth date"
      className="absolute right-8 top-3 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 "
    >
      تاریخ تولد
    </label> */}
    
  </div>
          {/* 
            {...register("E-mail", { required: true, min: 1 })}
          /> */}
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-3s">
    <input
      type="email"
      id="email"
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-900 focus:ring-1 peer placeholder-transparent text-right text-black "
      placeholder="ایمیل"
      {...register("email", { required: "ایمیل معتبر نیست" })}
      required
    />
    {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
    <label
      htmlFor="email"
      className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-valid:top-2 peer-valid:text-sm peer-valid:-translate-y-2 peer-valid:text-gray-500"
    >
      ایمیل
    </label>
  </div>
        </div>
        <div className="w-full flex gap-5 mb-3">
          {/* <select
            className="w-1/2 animate__animated animate__fadeInUp animate__delay-4s"
            {...register("military service", { required: true })}
           */}
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-4s">
    <select
      id="military"
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700 peer placeholder-transparent text-right text-black "
      {...register("military", { required: "این فیلد اجباری است" })}
      required
    >
        <option value=""  hidden>
      
    </option>
        <option value="done">انجام شده</option>
            <option value="educational">معافیت تحصیلی</option>
            <option value="in progress">در حال انجام</option>
            <option value="gotta do">مشمول</option>
            <option value="not have to go">معاف دائم</option>
    </select>
    {errors.military && (
            <p className="text-red-500 text-sm mt-1">{errors.military.message}</p>
          )}
    <label
      htmlFor="military"
      className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-valid:top-2 peer-valid:text-sm peer-valid:-translate-y-2 peer-valid:text-gray-500"
    >
      وضعیت نظام وظیفه
    </label>
  </div>
          {/* <select className="w-1/2 animate__animated animate__fadeInUp animate__delay-5s" {...register("gender", { required: true })}>
            <option value="Mr">آقا</option>
            <option value="Mrs">خانم</option>
          </select> */}
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-5s">
    <select
      id="gender"
      className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700 peer placeholder-transparent text-right text-black "
      {...register("gender", { required: "این فیلد اجباری است" })}
    >
        <option value="mr">آقا</option>
            <option value="miss">خانم</option>
    </select>
    {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
    <label
      htmlFor="gender"
      className="absolute right-3 top-3 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 "
    >
      جنسیت
    </label>
  </div>
        </div>
        <div className="w-full">
          <h3 className="mb-2 animate__animated animate__fadeInUp animate__delay-5s text-black">رزومه</h3>
          <div className="flex items-center justify-center w-full mb-2">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white dark:bg-white dark:border-gray-400 animate__animated animate__fadeInUp animate__delay-5s"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg fill="grey" width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5531248,16.4450044 C17.6286997,16.179405 17.9052761,16.0253597 18.1708755,16.1009346 C18.4364749,16.1765095 18.5905202,16.4530859 18.5149453,16.7186853 C18.2719275,17.5727439 17.5931039,18.2421122 16.71594,18.4614032 L8.58845447,20.4931921 C7.21457067,20.8106614 5.86688485,19.9801117 5.55483435,18.6278929 L3.45442103,9.52610182 C3.14793844,8.19801056 3.96175966,6.86917188 5.28405996,6.53859681 L7.17308561,6.06634039 C7.44098306,5.99936603 7.71245031,6.16224638 7.77942467,6.43014383 C7.84639904,6.69804129 7.68351869,6.96950853 7.41562123,7.03648289 L5.52659559,7.50873931 C4.7332154,7.70708435 4.24492267,8.50438756 4.42881223,9.30124232 L6.52922555,18.4030334 C6.71644059,19.2142985 7.52497921,19.7125835 8.35461578,19.5209579 L16.4734044,17.4912607 C17.0000615,17.3595964 17.407086,16.9582414 17.5531248,16.4450044 Z M20,13.2928932 L20,5.5 C20,4.67157288 19.3284271,4 18.5,4 L9.5,4 C8.67157288,4 8,4.67157288 8,5.5 L8,11.2928932 L10.1464466,9.14644661 C10.3417088,8.95118446 10.6582912,8.95118446 10.8535534,9.14644661 L14.5637089,12.8566022 L17.2226499,11.0839749 C17.4209612,10.9517673 17.6850212,10.9779144 17.8535534,11.1464466 L20,13.2928932 L20,13.2928932 Z M19.9874925,14.6945992 L17.4362911,12.1433978 L14.7773501,13.9160251 C14.5790388,14.0482327 14.3149788,14.0220856 14.1464466,13.8535534 L10.5,10.2071068 L8,12.7071068 L8,14.5 C8,15.3284271 8.67157288,16 9.5,16 L18.5,16 C19.2624802,16 19.8920849,15.4310925 19.9874925,14.6945992 L19.9874925,14.6945992 Z M9.5,3 L18.5,3 C19.8807119,3 21,4.11928813 21,5.5 L21,14.5 C21,15.8807119 19.8807119,17 18.5,17 L9.5,17 C8.11928813,17 7,15.8807119 7,14.5 L7,5.5 C7,4.11928813 8.11928813,3 9.5,3 Z M16,5 L18,5 C18.5522847,5 19,5.44771525 19,6 L19,8 C19,8.55228475 18.5522847,9 18,9 L16,9 C15.4477153,9 15,8.55228475 15,8 L15,6 C15,5.44771525 15.4477153,5 16,5 Z M16,6 L16,8 L18,8 L18,6 L16,6 Z"/>
</svg>
                <p className="mb-2 text-sm text-black dark:text-black">
                  <span className="font-semibold text-blue-700">انتخاب فایل</span> یا رها کردن فایل در این قسمت
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  یک فایل انتخاب کنید تا حداکثر حجم 2 MB
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            className="bg-purple-950 px-3 py-2 rounded-sm text-xs cursor-pointer animate__animated animate__fadeInUp animate__delay-5s"
            type="submit"
            value="ثبت رزومه"
          />
        </div>
      </form>
    </>
  );
};

export default FormInputs;
