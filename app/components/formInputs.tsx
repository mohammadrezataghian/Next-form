"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "animate.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import ErrorSvg from "./errorSvg";
import InputFileSvg from "./inputFileSvg";
import {FormValues,FormData,FileInfo} from "../types"

const FormInputs = () => {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data:FormData) => console.log(data);
  console.log(errors);

  const [value, setValue] = useState(new Date());
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const preview = URL.createObjectURL(file);
      setFileInfo({
        name: file.name,
        size: (file.size / 1024).toFixed(2), 
        preview,
      });
    }
  };

  const handleHideFileInfo = () => {
    setFileInfo(null);
  };
  return (
    <>
      <form noValidate className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
                <ErrorSvg/>
              </p>
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
              {...register("phoneNumber", {
                required: " شماره تلفن معتبر نیست",
              })}
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
                <ErrorSvg/>
              </p>
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
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-2s">
            <DatePicker
              value={value}
              onChange={setValue}
              calendar={persian}
              locale={persian_fa}
              inputClass="custom-input"
              portal
              style={{
                width: "100%",
                boxSizing: "border-box",
                height: "57.6px",
                borderRadius: "0.375rem",
                border: "1px solid #D1D5DB",
                paddingTop: "1.5rem",
              }}
              containerStyle={{
                width: "100%",
              }}
            />
            <label
    htmlFor="datepicker"
    className="absolute right-8 top-4 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-300 z-50"
  >
    {value ? "تاریخ تولد" : "تاریخ انتخابی"} 
  </label>
           
          </div>
          {/* 
            {...register("E-mail", { required: true, min: 1 })}
          /> */}
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-3s">
            <input
              type="text"
              id="email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-900 focus:ring-1 peer placeholder-transparent text-right text-black "
              placeholder="ایمیل"
              {...register("email", { required: "ایمیل معتبر نیست" })}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
                <ErrorSvg/>
              </p>
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
          {/* {...register("military service", { required: true })}*/}
          <div className="relative w-1/2 rtl animate__animated animate__fadeInUp animate__delay-4s">
            <select
              id="military"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700 peer placeholder-transparent text-right text-black "
              {...register("military", { required: "این فیلد اجباری است" })}
              required
            >
              <option value="" hidden></option>
              <option value="done">انجام شده</option>
              <option value="educational">معافیت تحصیلی</option>
              <option value="in progress">در حال انجام</option>
              <option value="gotta do">مشمول</option>
              <option value="not have to go">معاف دائم</option>
            </select>
            {errors.military && (
              <p className="text-red-500 text-xs mt-1">
                {errors.military.message}
              </p>
            )}
            <label
              htmlFor="military"
              className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:-translate-y-2 peer-focus:text-gray-500 peer-valid:top-2 peer-valid:text-sm peer-valid:-translate-y-2 peer-valid:text-gray-500"
            >
              وضعیت نظام وظیفه
            </label>
          </div>
          {/*  {...register("gender", { required: true })}>*/}
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
              <p className="text-red-500 text-xs mt-1">
                {errors.gender.message}
              </p>
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
          <h3 className="mb-1 animate__animated animate__fadeInUp animate__delay-5s text-black">
            رزومه
          </h3>
          <div className="flex items-center justify-center w-full mb-2">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white dark:bg-white dark:border-gray-400 animate__animated animate__fadeInUp animate__delay-5s"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <InputFileSvg/>
                <p className="mb-2 text-sm text-black dark:text-black">
                  <span className="font-semibold text-blue-700">
                    انتخاب فایل
                  </span>{" "}
                  یا رها کردن فایل در این قسمت
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  یک فایل انتخاب کنید تا حداکثر حجم 2 MB
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          {fileInfo && (
            <div className="mt-2 p-2 border rounded-lg bg-white flex justify-between gap-4 w-full mb-2">
              <div className="flex gap-5">
                {fileInfo.preview && (
                  <img
                    src={fileInfo.preview}
                    alt="Preview"
                    className=" w-10 h-10 rounded-md"
                  />
                )}
                <div>
                  <p className="text-sm text-black">{fileInfo.name}</p>
                  <p className="text-sm text-black">{fileInfo.size} KB</p>
                </div>
              </div>
              <div className="h-full self-center">
                <button
                  onClick={handleHideFileInfo}
                  className="px-3 py-1 text-sm rounded-md text-gray-600"
                >
                  &#10005;
                </button>
              </div>
            </div>
          )}
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